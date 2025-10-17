import { Password } from "@mui/icons-material";
import {
  changePasswordScheme,
  ChangePasswordScheme,
} from "../../lib/schemas/changePasswordScheme";
import AccountFormWrapper from "./AccountFormWrapper";
import { zodResolver } from "@hookform/resolvers/zod";
import TextInput from "../../app/shared/components/TextInput";
import { useAccount } from "../../lib/hooks/useAccount";
import { toast } from "react-toastify";

export default function ChangePasswordForm() {
  const { changePassword } = useAccount();
  const onSubmit = async (data: ChangePasswordScheme) => {
    try {
      await changePassword.mutateAsync(data, {
        onSuccess: () => toast.success("Your password has been change"),
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <AccountFormWrapper<ChangePasswordScheme>
      title="Change password"
      icon={<Password fontSize="large" />}
      onSubmit={onSubmit}
      submitButtonText="Update password"
      resolver={zodResolver(changePasswordScheme)}
      reset={true}
    >
      <TextInput
        type="password"
        label="Current Password"
        name="currentPassword"
      />
      <TextInput type="password" label="New Password" name="newPassword" />
      <TextInput
        type="password"
        label="Confirm Password"
        name="confirmPassword"
      />
    </AccountFormWrapper>
  );
}
