import React, { HTMLAttributes, useCallback, useState } from "react";

type Props = {
  label1?: string;
  label2?: string;
  flag?: boolean;
  onEnterPressKey?: () => void;
} & HTMLAttributes<HTMLInputElement>;

export const HtmlPrac = (props: Props) => {
  const { label1, label2, flag, onEnterPressKey, ...defaultProps } = props;
  const [isVisible, setIsVisible] = useState(true);

  const handleSubmit = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter" && onEnterPressKey) {
        onEnterPressKey();
        if (flag) {
          setIsVisible(!isVisible);
        }
      }
    },
    [isVisible]
  );

  return (
    <>
      <div>
        <form>
          {label1 && isVisible && <div>{label1}</div>}
          <input {...defaultProps} onKeyPress={handleSubmit} />
        </form>
      </div>
      <div>
        {label2 && isVisible && <div>{label2}</div>}
        <input  {...defaultProps} onKeyPress={handleSubmit} />
      </div>
    </>
  );
};
