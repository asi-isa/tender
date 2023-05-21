import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
}

export default function FadeUp({
  children,
  duration = 0.65,
  delay = 0,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: "1rem" }}
      whileInView={{ opacity: 1, y: "0rem" }}
      viewport={{ once: true }}
      transition={{ duration, delay, opacity: { duration: duration + 0.33 } }}
    >
      {children}
    </motion.div>
  );
}
