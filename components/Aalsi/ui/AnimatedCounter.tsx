"use client";

import CountUp from "react-countup";

interface Props {
  end: number;
  suffix?: string;
  prefix?: string;
}

export default function AnimatedCounter({
  end,
  suffix,
  prefix,
}: Props) {
  return (
    <CountUp
      end={end}
      enableScrollSpy
      scrollSpyOnce
      duration={2}
      prefix={prefix}
      suffix={suffix}
    />
  );
}