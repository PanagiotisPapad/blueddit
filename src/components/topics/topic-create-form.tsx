"use client";

import {
  Input,
  Textarea,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";
import * as actions from "@/actions";
import { useFormState } from "react-dom";

export default function TopicCreateForm() {
  const [formState, action] = useFormState(actions.createTopic, {
    errors: {},
  });

  return (
    <div>
      <Popover placement="left">
        <PopoverTrigger>
          <Button color="primary">Create a Topic</Button>
        </PopoverTrigger>
        <PopoverContent>
          <form action={action}>
            <div className="flex flex-col gap-4 p-4 w-80">
              <h1 className="text-lg">Create a Topic</h1>
              <Input
                name="title"
                label="Title"
                labelPlacement="outside"
                placeholder="Title"
                isInvalid={!!formState.errors.title}
                errorMessage={formState.errors.title?.join(", ")}
              />
              <Textarea
                name="description"
                label="Description"
                labelPlacement="outside"
                placeholder="Describe your topic"
                isInvalid={!!formState.errors.description}
                errorMessage={formState.errors.description?.join(", ")}
              />

              {formState.errors._form ? (
                <div className="text-red-500">
                  {formState.errors._form?.join(", ")}
                </div>
              ) : null}

              <Button type="submit" color="success">
                Submit
              </Button>
            </div>
          </form>
        </PopoverContent>
      </Popover>
    </div>
  );
}
