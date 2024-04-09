'use client'

interface Data {
    id: number;
    action: String;
}

export default function TheButton( { id,action }: Data) {
    function handleClick(): void {
        if(action === 'delete') {
            console.log('Delete', id)
        }
        else if(action === 'edit') {
            console.log('Edit', id)
        }
        else if(action === 'postbutton') {
            console.log('Add Post Button Clicked')
        }
    }

    return (
        <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleClick() }
            >
                {action}
            </button>
        </div>
    )
}