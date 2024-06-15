import { useMutation, useQuery } from "@tanstack/react-query";

export const useCustomQuery = (key: string, fn: any, gcTime?: number, staleTime?: number, initialData?: any) => {
  return useQuery({
    queryKey: [key],
    queryFn: fn,
    gcTime: gcTime && gcTime,
    staleTime: staleTime && staleTime,
    initialData: initialData && initialData,
  });
};

export const useCustomMutation = async (key: string, fn: any) => {
  return useMutation({
    mutationKey: [key],
    mutationFn: fn,
  });
};
