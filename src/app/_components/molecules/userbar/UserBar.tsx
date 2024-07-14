import { Bar } from "./UserBar.style";
import Avatar from "@/_components/atoms/avatar/Avatar";
import { UserProps } from "../user/User";

export default function UserBar({ username, img }: UserProps) {
  return (
    <Bar.Wrapper>
      <Bar.Button>
        <Avatar size={44} img={img} />
        <Bar.UserInfo>
          <span>{username}</span>
          y_z_mental님이 팔로우합니다
        </Bar.UserInfo>
      </Bar.Button>
    </Bar.Wrapper>
  );
}
