import React from 'react'

export default function uploadPrescription() {
    return (
        <div>
            {/* <!-- START SECTION BREADCRUMB --> */}
            <div class="breadcrumb_section bg_gray page-title-mini">
                <div class="container">
                    {/* <!-- STRART CONTAINER --> */}
                    <div class="row align-items-center">
                        <div class="col-md-6">
                            <div class="page-title">
                                <h1> Upload Prescription</h1>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <ol class="breadcrumb justify-content-md-end">
                                <li class="breadcrumb-item"><a href="#">Home</a></li>
                                <li class="breadcrumb-item"><a href="#">Pages</a></li>
                                <li class="breadcrumb-item active">Upload Prescription</li>
                            </ol>
                        </div>
                    </div>
                    {/* </div><!-- END CONTAINER--> */}
                </div>
            </div>
            {/* <!-- END SECTION BREADCRUMB --> */}

            <div  style={{ margin: '50px'}}>
                <center>
                <div>
                    Please attach a prescription to proceed
            </div>
                <div>
                    <img src="https://res.cloudinary.com/du8msdgbj/image/upload/v1587633147/marketing/tw0dco5xexdieshf2lxs.svg" alt="" />
                    <button><h5>Upload New</h5></button>
                </div>
                </center>
            </div>
        </div>
    )
}
