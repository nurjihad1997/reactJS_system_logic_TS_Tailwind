
import React, {ReactNode, useState} from 'react'
type Props = {
  id: string;
  type: "text" | "number" | "email" | "tel" | "date" | "file";
  name: string;
  state?: "success" | "loading";
  wrapperClassName?: string;
  label?: ReactNode;
  accept?: string;
  readOnly?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
  inputClassName?: string;
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;

};

const fileAcceptImageOnly = ['image/png', "image/gif", "image/jpeg", "image/*"];


function Input(props: Props) {
  let {state} = props
  if(props.isLoading) state = "loading";
  const [blobImage, setBlobImage] = useState<string | null>(null);
  
  const wrapperClassName = ["flex flex-col", props.wrapperClassName]
  let inputClassName = ["w-full appearance-none font-medium py-2 px-5 rounded-full border border-soft-gray focus:border-blue focus:outline-none valid:disabled:bg-soft-gray", props.inputClassName]
  const isFileAcceptImageOnly = props.type === "file" && props.accept?.split(",").some(item => fileAcceptImageOnly.includes(item));

  let RenderInputImage = null

    function onChangeImage(event: React.ChangeEvent<HTMLInputElement>) {
      const result = (event.target as HTMLInputElement).files

      let file;
      if(result) {
        file = result[0]
        if(file) {
          const image = URL.createObjectURL(file)
          setBlobImage(image)

          
        }
      }
    }

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    props.onChange && props.onChange(event)

    if(isFileAcceptImageOnly) onChangeImage(event)
  }

  function fnRemoveBlobImage() {
    if(blobImage) setBlobImage(null)
  }

  if(props.type === "file" && isFileAcceptImageOnly){
    inputClassName = ["hidden"]

    RenderInputImage = (
    
    <div className="w-28 h-28 relative">
      {
        blobImage ? (
        <span className="flex rounded-full overflow-hidden w-full h-full">
          <img src={blobImage} alt="" className="object-cover" /> 
        </span> 
          ) : ( 
          <svg  viewBox="0 0 130 130" fill="none" preserveAspectRatio='xMidYMid meet'>
          <circle cx="65" cy="65" r="63" fill="white" stroke="#95A7E8" stroke-width="4"/>
          <circle cx="65" cy="38" r="22" stroke="#95A7E8" stroke-width="4"/>
          <path d="M18.0215 107V107C44.2222 81.914 85.6005 82.1411 111.524 107.513L112.022 108" stroke="#95A7E8" stroke-width="4"/>
          </svg>
          )

      }
      <label htmlFor={props.id} className="absolute inset-0 cursor-pointer"></label>
      <label htmlFor={props.id} className={["absolute left-1/2 bottom-0 cursor-pointer transform -translate-x-1/2 translate-y-1/2 rounded-full text-white w-6 h-6 flex items-center justify-center", blobImage ? "bg-red" : "bg-green"].join(" ")} onClick={fnRemoveBlobImage}>
      {blobImage ? "-" : "+"}
      </label>
      
    </div>
    )
  }
  return <div className={wrapperClassName.join(" ")}>
    {
      props.label && (
      <label htmlFor={props.id} className="mb-1">
        {props.label}
      </label>
    )}
    <div className="relative">
      <input 
      type={props.type} 
      id={props.id} 
      name={props.name} 
      readOnly={props.readOnly} 
      disabled={props.isDisabled || props.isLoading} 
      className={inputClassName.join(" ")} 
      placeholder={props.placeholder || "Your placeholder goes here"} 
      onChange={onChange} />

      {RenderInputImage}

      {state === "loading" && 
      <span className={["transition-all duration-300 absolute right-0 top-0 bottom-0 z-10 inline-flex items-center justify-center opacity-100 aspect-square"].join(" ")}>
        <svg viewBox="0 0 20 20" fill="none" className='animate-spin h-5 w-5'>
          <circle cx="10" cy="10" r="9" stroke="#B1CBF2" stroke-width="2"/>
          <mask id="path-2-inside-1_0_1" fill="white">
          <path d="M7.68937 1.23688C7.55737 0.736293 7.85593 0.218839 8.36667 0.134276C10.2974 -0.185396 12.2872 0.067601 14.0859 0.872824C16.1709 1.80619 17.8735 3.42527 18.9104 5.46073C19.9473 7.49619 20.2561 9.82531 19.7854 12.0606C19.3793 13.9891 18.4141 15.7474 17.0205 17.1213C16.6518 17.4848 16.0577 17.4221 15.7304 17.021C15.403 16.6199 15.4674 16.0329 15.8281 15.6616C16.8939 14.5644 17.6331 13.1835 17.9509 11.6743C18.3334 9.85806 18.0825 7.96558 17.2399 6.31172C16.3974 4.65786 15.014 3.34231 13.3199 2.58392C11.9123 1.95377 10.3606 1.73985 8.84654 1.957C8.3341 2.0305 7.82136 1.73746 7.68937 1.23688Z"/>
          </mask>
          <path d="M7.68937 1.23688C7.55737 0.736293 7.85593 0.218839 8.36667 0.134276C10.2974 -0.185396 12.2872 0.067601 14.0859 0.872824C16.1709 1.80619 17.8735 3.42527 18.9104 5.46073C19.9473 7.49619 20.2561 9.82531 19.7854 12.0606C19.3793 13.9891 18.4141 15.7474 17.0205 17.1213C16.6518 17.4848 16.0577 17.4221 15.7304 17.021C15.403 16.6199 15.4674 16.0329 15.8281 15.6616C16.8939 14.5644 17.6331 13.1835 17.9509 11.6743C18.3334 9.85806 18.0825 7.96558 17.2399 6.31172C16.3974 4.65786 15.014 3.34231 13.3199 2.58392C11.9123 1.95377 10.3606 1.73985 8.84654 1.957C8.3341 2.0305 7.82136 1.73746 7.68937 1.23688Z" stroke="#3A37E6" stroke-width="4" mask="url(#path-2-inside-1_0_1)"/>
        </svg>

      </span>
      }

      {state === "success" && 
      <span className={["transition-all duration-300 absolute right-0 top-0 bottom-0 z-10 inline-flex items-center justify-center opacity-100 aspect-square"].join(" ")}>
        <span className="w-5 h-5 inline-flex items-center justify-center bg-green rounded-full p-1">
        <svg viewBox="0 0 14 10" fill="none">
          <path d="M12.4545 1.36365L5.18177 8.63637L1.54541 5.00017" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </span>


      </span>
      }
    </div>
  </div>
}


export default Input