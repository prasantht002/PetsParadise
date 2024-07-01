import React from 'react'

export default function DeletePet({handleDelete, refr}) {
    return (
        <>
            <dialog id="my_modal_6" className="modal" ref={refr}>
                <div className="modal-box w-11/12 max-w-5xl">
                    <div className="col-span-full">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>

                        <form onSubmit={handleDelete}>
                           
                            <div className="modal-body">
                                <p>Are you sure you want to delete this Record?</p>
                                <p className="text-warning"><small>This action cannot be undone.</small></p>
                            </div>
                            
                                <br/>
                                <button type="submit" className="btn bg-red-600 text-white">Delete</button> 
                            
                        </form>



                    </div>

                </div>
            </dialog>
        </>
    )
}
