"use client";

import { useSession } from "next-auth/react";

export default function Profile() {
  const session = useSession();

  if (session.data?.user) {
    return <div>From client: User is singed in</div>;
  }

  return <div>From client: User is not signed in</div>;
}
