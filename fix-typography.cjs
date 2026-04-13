const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src', 'components');

const files = fs.readdirSync(srcDir).filter(f => f.endsWith('.tsx'));

const replacements = [
  {
    target: 'className="inline-block px-10 py-5 rounded-full bg-primary/20 text-[#1e1b4b] text-4xl md:text-5xl font-display font-bold mt-2 backdrop-blur-md shadow-sm border border-primary/20"',
    replacement: 'className="inline-block px-6 py-2.5 rounded-full bg-primary/20 text-[#1e1b4b] text-2xl md:text-3xl font-display font-bold mt-2 backdrop-blur-md shadow-sm border border-primary/20"'
  },
  {
    target: 'className="text-5xl md:text-7xl font-display font-bold mb-6 text-[#0f172a]"',
    replacement: 'className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-[#0f172a]"'
  },
  {
    target: 'className="inline-block px-8 py-4 rounded-full bg-primary/20 text-[#1e1b4b] text-3xl font-bold mb-6 backdrop-blur-md shadow-sm border border-primary/20"',
    replacement: 'className="inline-block px-5 py-2 rounded-full bg-primary/20 text-[#1e1b4b] text-base font-bold mb-6 backdrop-blur-md shadow-sm border border-primary/20"'
  },
  {
    target: 'text-2xl text-[#0f172a] mb-6 leading-relaxed font-medium',
    replacement: 'text-[1.1rem] md:text-lg text-[#0f172a] mb-6 leading-relaxed font-medium'
  },
  {
    target: 'text-2xl text-[#0f172a] mb-8 leading-relaxed font-medium',
    replacement: 'text-[1.1rem] md:text-lg text-[#0f172a] mb-8 leading-relaxed font-medium'
  },
  {
    target: 'text-3xl font-display font-bold mb-8',
    replacement: 'text-2xl font-display font-bold mb-6'
  },
  {
    target: 'text-3xl font-display font-bold mb-6',
    replacement: 'text-2xl font-display font-bold mb-4'
  },
  {
    target: 'text-5xl mb-6 group-hover:scale-110',
    replacement: 'text-3xl mb-4 group-hover:scale-110'
  },
  {
    target: 'className="text-3xl font-display font-bold text-[#1e1b4b]"',
    replacement: 'className="text-xl font-display font-bold text-[#1e1b4b]"'
  },
  {
    target: 'className="text-2xl md:text-3xl text-[#1e293b] font-medium mb-8 max-w-2xl mx-auto"',
    replacement: 'className="text-lg md:text-xl text-[#1e293b] font-medium mb-8 max-w-2xl mx-auto"'
  }
];

let changedConfig = false;

for (const file of files) {
  const filePath = path.join(srcDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let hasChanges = false;

  for (const rule of replacements) {
    if (content.includes(rule.target)) {
      content = content.split(rule.target).join(rule.replacement);
      hasChanges = true;
    }
  }

  if (hasChanges) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Modified', file);
    changedConfig = true;
  }
}

if (!changedConfig) console.log('No files modified.');
