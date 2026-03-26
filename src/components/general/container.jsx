import clsx from "clsx"

const Container = ({ children, className }) => {
  return (
    <div className={clsx("max-w-7xl min-w-sm mx-auto", className)}>
      {children}
    </div>
  )
}

export default Container
