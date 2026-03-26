import clsx from "clsx"

const variants = {
  default:
    "bg-black text-white px-4 py-2 rounded-lg cursor-pointer active:scale-95",
  outline:
    "border border-neutral-700 text-black px-4 py-2 rounded-lg cursor-pointer active:scale-95",
  ghost:
    "text-black px-4 py-2 rounded-lg hover:bg-neutral-50/50 cursor-pointer active:scale-95",
}

const Button = ({
  children,
  className,
  type = "button",
  variant = "default",
  onClick,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(variants[variant], className)}
    >
      {children}
    </button>
  )
}

export default Button
