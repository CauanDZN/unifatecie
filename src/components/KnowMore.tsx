export function KnowMore(){
    return (
        <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
            <img className="w-24 h-24 rounded-full mx-auto" src="https://static.dw.com/image/680783_804.jpg" alt="" width="384" height="512" />
            <div className="pt-6 space-y-4">
                <blockquote>
                <p className="text-lg font-medium text-white">
                    “A educação é o nosso passaporte para o futuro, 
                    pois o amanhã pertence às pessoas que se preparam hoje.”
                </p>
                </blockquote>
                <figcaption className="font-medium">
                <div className="text-sky-500 dark:text-sky-400">
                    Malcolm X
                </div>
                <div className="text-slate-700 dark:text-slate-500">
                    Ativista dos Direitos Humanos | Nebraska - EUA
                </div>
                </figcaption>
            </div>
        </figure>
    )
}