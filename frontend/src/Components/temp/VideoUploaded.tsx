import React from 'react'

export default function VideoUploaded() {

    return (
        <section>
            <h1>Video upload page</h1>
            <form action="/add-video" method="POST" encType="multipart/form-data">
            <input type="file" name="video" multiple />
            <button>submit</button>
            </form>
        </section>
    )
}
