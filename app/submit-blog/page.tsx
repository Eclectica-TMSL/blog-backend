export default function SubmitBlog() {
  const id = process.env.NEXT_APP_JOTFORM_ID;
  return (
    <div className="flex flex-col items-center justify-center absolute top-20 left-0 w-full">
      <iframe
          title="Blog-XD"
          id={`JotFormIFrame-${id}`}
          src={`https://form.jotform.com/${id}`}
          frameBorder="0"
          style={{ minWidth: '100%', height: '330vh', border: 'none' }}
        >
        </iframe>
        <div style={{ position: 'absolute', bottom: '0', height: '120px', width: '100%'}} className="bg-background"></div>
    </div>
  );
}
