"use client";

import { Issue, User } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const StatusSelect = ({ issue }: { issue: Issue }) => {

    const statuses = [
      { value: "OPEN", label: "Open" },
      { value: "IN_PROGRESS", label: "In Progress" },
      { value: "CLOSED", label: "Closed" },
    ];

    const updateStatus = (status: string) => {
      axios
        .patch("/api/issues/" + issue.id, {
          status: status,
        })
        .catch(() => {
          toast.error("Changes could not be saved.");
        });
    };

    return (
      <>
        <Select.Root
          defaultValue={issue.status}
          onValueChange={updateStatus}
        >
          <Select.Trigger placeholder="Set to..." />
          <Select.Content>
            <Select.Group>
              <Select.Label>Statuses</Select.Label>
              {statuses?.map((status) => (
                <Select.Item key={status.value} value={status.value}>
                  {status.label}
                </Select.Item>
              ))}
            </Select.Group>
          </Select.Content>
        </Select.Root>
        <Toaster />
      </>
    );
};

export default StatusSelect;
