import ImageElement from './ImageElement';

type SafeNumber = number | `${number}`;

interface Props {
  src: string;
  height: SafeNumber;
  width: SafeNumber;
  onClick?: () => void;
  borderRadius?: number;
  border?: string;
}

export default function CardElement(props: Props) {
  const {src, height, width, onClick, borderRadius, border} = props;

  return (
    <ImageElement
      src={src}
      height={height}
      width={width}
      onClick={onClick}
      style={{
        borderRadius: borderRadius ?? 0,
        border,
      }}
    />
  );
}
