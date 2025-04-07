const languages = [
  { code: 'en', name: 'English' },
  { code: 'fr', name: 'Français' },
  { code: 'ja', name: '日本語' },
  { code: 'ko', name: '한국어' },
  { code: 'pt', name: 'Português' },
  { code: 'es', name: 'Español' },
  { code: 'de', name: 'Deutsch' },
  { code: 'it', name: 'Italiano' },
  { code: 'zh', name: '中文' },
  { code: 'hi', name: 'हिन्दी' },
];

export default function Languages() {
  return (
    <section className="py-32">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-xl font-medium text-center mb-16">Supported Languages</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-12 max-w-[800px] mx-auto">
          {languages.map((lang) => (
            <div
              key={lang.code}
              className="text-center"
            >
              <span className="text-base text-gray-900">{lang.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 