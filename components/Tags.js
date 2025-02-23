const Tag = ({ tag }) => {
    return (
      <span className="inline-block bg-slate-200 rounded-full px-3 py-1 text-sm font-semibold text-slate-700 mr-2 mb-2">
        {typeof tag === 'string' ? tag : tag.name || tag.value || ''}
      </span>
    );
  };
  
  export default Tag;