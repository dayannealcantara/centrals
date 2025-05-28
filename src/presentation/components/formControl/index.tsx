"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Title } from "@components/core/title";

import { CentralFormData, centralSchema } from "./centralSchema";
import { FormControlProps } from "./types";
import { formatMac } from "../../utils/formatMac";
import { useCreateCentral } from "../../../hooks/useCreateCentral";
import { useUpdateCentral } from "../../../hooks/useUpdateCentral";
import { useCentralStore } from "../../../store/centralStore";
import { Central } from "../../../types/central";

import * as styles from "./styles/modal-cadatro.css";

export const FormControl = ({ initialData, onClose }: FormControlProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<CentralFormData>({
    resolver: zodResolver(centralSchema),
    defaultValues: initialData,
  });

  const { mutate: createMutate } = useCreateCentral();
  const { mutate: updateMutate } = useUpdateCentral();

  const models = useCentralStore((state) => state.models);

  const onSubmit = (data: CentralFormData) => {
    const mutationFn = data.id ? updateMutate : createMutate;

    mutationFn(data as Central, {
      onSuccess: () => {
        onClose();
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <label>
        <Title.Root size="medium">
          <Title.Text className={styles.title}>Nome:</Title.Text>
        </Title.Root>
        <input {...register("name")} />
        {errors.name && <span>{errors.name.message}</span>}
      </label>

      <label>
        <Title.Root size="medium">
          <Title.Text className={styles.title}>MAC:</Title.Text>
        </Title.Root>
        <input
          {...register("mac")}
          placeholder="XX:XX:XX:XX:XX:XX"
          onChange={(e) => {
            const formatted = formatMac(e.target.value);
            setValue("mac", formatted);
          }}
        />
        {errors.mac && <span>{errors.mac.message}</span>}
      </label>

      <label>
        <Title.Root size="medium">
          <Title.Text className={styles.title}>Modelo:</Title.Text>
        </Title.Root>
        <select {...register("modelId")}>
          {models?.map((model) => (
            <option key={model.id} value={model.id}>
              {model.name}
            </option>
          ))}
        </select>
        {errors.modelId && <span>{errors.modelId.message}</span>}
      </label>

      <div className={styles.buttonGroup}>
        <button type="submit" className={styles.button}>
          {initialData?.id ? "Atualizar" : "Cadastrar"}
        </button>
        <button type="button" className={styles.button} onClick={onClose}>
          Cancelar
        </button>
      </div>
    </form>
  );
};
