export const SubContent = ({ content }) => {

  return (
    <div className="w-1/2">
      <div>
        {content.body.map((data, i) => {
          return (
            <div key={i} className="animate-fadeIn font-mono">
              <div className="mb-3 px-5">
                <div className="text-xl mb-2">{data.descr}</div>
                {content.layout === '1' ?
                  <ul className='grid grid-cols-2'>
                    {data.listItems.map((tool, j) => (
                      <li key={j} className="text-md mb-1 font-sans">{tool}</li>
                    ))}
                  </ul>
                  :
                  <div>
                    {data.listItems.map((data, j) => (
                      <div key={j} className="mb-2">
                        <div className="text-lg font-mono font-bold">{data.name}</div>
                        <div className="text-md font-sans">{data.descr}</div>
                        <div className="text-sm font-sans text-content-accent">{data.descr2}</div>
                      </div>
                    ))}
                  </div>
                }
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}