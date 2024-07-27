import { LogoBox } from "./Logo.style";
import { GNB_SHAPE, GnbShapeType } from "@/_constant/gnb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCameraRetro } from "@fortawesome/free-solid-svg-icons";

interface LogoProps {
  gnbShape: GnbShapeType;
}

export default function Logo({ gnbShape }: LogoProps) {
  return (
    <>
      {gnbShape === GNB_SHAPE.ALL ? (
        <LogoBox.i />
      ) : (
        <LogoBox.ICON>
          <FontAwesomeIcon icon={faCameraRetro} />
        </LogoBox.ICON>
      )}
    </>
  );
}
