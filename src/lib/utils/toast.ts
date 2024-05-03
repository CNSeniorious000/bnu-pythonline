import { tick } from "svelte";
import { toast } from "svelte-sonner";

export function withToast<T extends (...args: any[]) => any>(data: { loading: string; success?: string; duration?: number }) {
  return (anyFunction: T) => {
    data.success = data.success ?? data.loading;
    return (async (...args) => {
      const promise: Promise<ReturnType<T>> = Promise.resolve(anyFunction(...args));
      toast.promise(promise, { ...data, class: "font-mono text-xs" });
      const result = await promise;
      await tick();
      return result;
    }) as T;
  };
}
