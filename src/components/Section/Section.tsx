import { motion } from "framer-motion"
import { FC, ReactNode } from "react"

export const Section: FC<{ delay?: number, children: ReactNode }> = ({ children, delay = 0 }) => (
    <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay }}
    >
        {children}
    </motion.div>
)