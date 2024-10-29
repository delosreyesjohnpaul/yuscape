"use client";

import { UserAvatar } from "./user-avatar"; 
import { useOthers, useSelf } from "@/liveblocks.config";

const MAX_SHOWN_USERS = 2;

export const Participants = () => {
  const users = useOthers();
  const currentUser = useSelf();

  const hasMoreUsers = users.length > MAX_SHOWN_USERS;

    return (
        <div className="absolute h-12 top-2 right-2 bg-white rounded-md p-3 flex items-center shadow-md">
            <div className="flex gap-x-2">
            {users
              .slice(0, MAX_SHOWN_USERS)
              .map(({ connectionId, info }) => {
                const picture = typeof info?.picture === "string" ? info.picture : undefined;
                return (
                  <UserAvatar
                    key={connectionId}
                    src={picture}
                    name={info?.name}
                    fallback={info?.name?.[0] || "T"}
                  />
                );
              })}

              {currentUser && (
                <UserAvatar
                  src={typeof currentUser.info?.picture === 'string' ? currentUser.info.picture : undefined}
                  name={`${currentUser.info?.name} (You)`}
                  fallback={currentUser.info?.name?.[0]}
                />
              )}

            {hasMoreUsers && (
              <UserAvatar
                name={`${users.length - MAX_SHOWN_USERS} more`}
                fallback={`+${users.length - MAX_SHOWN_USERS}`}
              />
            )}
            </div>
        </div>
    )
}

export function ParticipantsSkeleton() {
  return (
    <div className="absolute h-12 top-2 right-2 bg-white rounded-md p-3 flex items-center shadow-md w-[100px]" />
  );
}