<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <BasicForm @register="registerForm" />
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, ref, computed, unref } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { accountFormSchema } from './account.data';
  import { getDeptList, AccountAdd } from '/@/api/system/system';

  export default defineComponent({
    name: 'AccountModal',
    components: { BasicModal, BasicForm },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const isUpdate = ref(true);

      const [registerForm, { setFieldsValue, updateSchema, resetFields, validate }] = useForm({
        labelWidth: 100,
        schemas: accountFormSchema,
        showActionButtonGroup: false,
        actionColOptions: {
          span: 24,
        },
      });

      const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
        resetFields();
        setModalProps({ confirmLoading: false });
        isUpdate.value = !!data?.isUpdate;

        if (unref(isUpdate)) {
          setFieldsValue({
            ...data.record,
          });
        }

        const treeData = await getDeptList();
        updateSchema([
          {
            field: 'password',
            required: !unref(isUpdate),
          },
          {
            field: 'dept_id',
            componentProps: { treeData },
          },
        ]);
      });

      const getTitle = computed(() => (!unref(isUpdate) ? '新增账号' : '编辑账号'));

      async function handleSubmit() {
        try {
          const values = await validate();
          setModalProps({ confirmLoading: true });
          // TODO custom api
          await AccountAdd({ ...values });
          closeModal();
          emit('success', { isUpdate: unref(isUpdate), values: { ...values } });
        } finally {
          setModalProps({ confirmLoading: false });
        }
      }

      return { registerModal, registerForm, getTitle, handleSubmit };
    },
  });
</script>
