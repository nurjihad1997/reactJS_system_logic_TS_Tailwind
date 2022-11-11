import configs from './configs'
import {cloneElement} from 'react'
type Props = {
  children: JSX.Element
  state: "primary" | "secondary" | "alternative" | "disabled" | "loading"
  className?: string;
  isDisabled?: boolean;
  isLoading?: boolean;
}

function Button (props: Props) {
  let {state} = props
  if(props.isDisabled) state = "disabled"
  if(props.isLoading) state = "loading"

  const className = [
    "py-2 px-6 font-medium rounded-full relative appearance-none focus:outline-none transition-all duration-300 inline-flex items-center select-none overflow-hidden",
    configs?.state?.[state] || "",
    props.className || "",
  ]

  let returnChildren = props.children
  let returnContent = props.children.props.children

  if(typeof props.children?.type === "object") {
    returnChildren = props.children.props.children
    returnContent = props.children.props.children.props.children
  }

  const children = cloneElement(returnChildren, {
    ...props.children.props,
    disabled: props.isDisabled || props.isLoading,
    children: (
    <>
      <span className={[
        "transition-all duration-300 inline-flex items-center",
        props.isLoading ? "-top-full opacity-0 invisible" : "top-0 opacity-100 visible"
      ].join(" ")}>
        {returnContent}
      </span>
      <span className={["transition-all duration-300 absolute left-0 right-0 z-10 inline-flex items-center justify-center", 
      props.isLoading ? "top-0 opacity-100":"-top-full opacity-0"].join(" ")}>
        <svg className='animate-spin w-5 h-5' viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="15" cy="15.0336" r="13.6577" stroke="#B1CBF2" stroke-width="2"/>
          <mask id="path-2-inside-1_0_1" fill="white">
          <path d="M11.6131 2.18882C11.4197 1.45508 11.8573 0.696607 12.6059 0.572657C15.4359 0.104091 18.3525 0.474927 20.989 1.6552C24.0451 3.02331 26.5407 5.39651 28.0606 8.38002C29.5805 11.3635 30.0331 14.7775 29.3431 18.054C28.7479 20.8806 27.3332 23.458 25.2904 25.4718C24.75 26.0045 23.8792 25.9126 23.3994 25.3247C22.9196 24.7369 23.014 23.8764 23.5427 23.3321C25.1049 21.724 26.1884 19.6998 26.6542 17.4877C27.2148 14.8255 26.8471 12.0516 25.6121 9.62738C24.3771 7.20319 22.3494 5.2749 19.8662 4.16328C17.803 3.23962 15.5286 2.92607 13.3093 3.24436C12.5582 3.35209 11.8066 2.92256 11.6131 2.18882Z"/>
          </mask>
          <path d="M11.6131 2.18882C11.4197 1.45508 11.8573 0.696607 12.6059 0.572657C15.4359 0.104091 18.3525 0.474927 20.989 1.6552C24.0451 3.02331 26.5407 5.39651 28.0606 8.38002C29.5805 11.3635 30.0331 14.7775 29.3431 18.054C28.7479 20.8806 27.3332 23.458 25.2904 25.4718C24.75 26.0045 23.8792 25.9126 23.3994 25.3247C22.9196 24.7369 23.014 23.8764 23.5427 23.3321C25.1049 21.724 26.1884 19.6998 26.6542 17.4877C27.2148 14.8255 26.8471 12.0516 25.6121 9.62738C24.3771 7.20319 22.3494 5.2749 19.8662 4.16328C17.803 3.23962 15.5286 2.92607 13.3093 3.24436C12.5582 3.35209 11.8066 2.92256 11.6131 2.18882Z" stroke="#3A37E6" stroke-width="4" mask="url(#path-2-inside-1_0_1)"/>
        </svg>

      </span>
    </>
    ),
  })

  return cloneElement(children, {
    className: className.join(" ")
  })
}


export default Button