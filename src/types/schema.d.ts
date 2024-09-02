interface User {
  profile: {
    createdAt: string;
    email: string;
    id: number;
    isActive: boolean;
    photo: string;
    role: string;
    updatedAt: string;
    username: string;
  };
}

type ApiError = {
  status: number;
  data: Record<string, string>;
};

type Children = {
  children: React.ReactNode;
};

type PageProps<
  T extends string[] = string[],
  SP extends string[] = string[],
> = {
  params: Record<T[number], string>;
  searchParams: Record<SP[number], string>;
};
