import React, { useState } from 'react';

const ColorOptions = () => {
  const [selectedScheme, setSelectedScheme] = useState(null);

  const colorSchemes = [
    {
      name: 'Classic Navy Blue',
      description: 'Deep navy - professional and trustworthy',
      colors: {
        primary: '#001F3F',
        secondary: '#FFFFFF',
        accent: '#0074D9',
        text: '#001F3F',
        textLight: '#5A7A9A',
        hover: '#003366',
        bg: '#FFFFFF'
      }
    },
    {
      name: 'Navy with Sky Blue Accent',
      description: 'Rich navy paired with bright sky blue for contrast',
      colors: {
        primary: '#0A2540',
        secondary: '#FFFFFF',
        accent: '#00B4D8',
        text: '#0A2540',
        textLight: '#4A6B85',
        hover: '#0D3A5C',
        bg: '#FFFFFF'
      }
    },
    {
      name: 'Deep Navy Professional',
      description: 'Sophisticated deep navy for executive presence',
      colors: {
        primary: '#1B263B',
        secondary: '#FFFFFF',
        accent: '#3B82F6',
        text: '#1B263B',
        textLight: '#64748B',
        hover: '#2A3F5F',
        bg: '#FFFFFF'
      }
    },
    {
      name: 'Royal Blue & Navy',
      description: 'Bold royal blue with navy undertones',
      colors: {
        primary: '#00308F',
        secondary: '#FFFFFF',
        accent: '#4169E1',
        text: '#00308F',
        textLight: '#5A7A9A',
        hover: '#0040B8',
        bg: '#FFFFFF'
      }
    },
    {
      name: 'Navy with Teal Accent',
      description: 'Classic navy with modern teal highlights',
      colors: {
        primary: '#0F172A',
        secondary: '#FFFFFF',
        accent: '#06B6D4',
        text: '#0F172A',
        textLight: '#475569',
        hover: '#1E293B',
        bg: '#FFFFFF'
      }
    },
    {
      name: 'Midnight Blue',
      description: 'Deep midnight blue - elegant and modern',
      colors: {
        primary: '#191970',
        secondary: '#FFFFFF',
        accent: '#4A90E2',
        text: '#191970',
        textLight: '#6B7FA0',
        hover: '#2A2A8A',
        bg: '#FFFFFF'
      }
    },
    {
      name: 'Navy with Cyan',
      description: 'Navy base with vibrant cyan accents',
      colors: {
        primary: '#0A2540',
        secondary: '#FFFFFF',
        accent: '#00D9FF',
        text: '#0A2540',
        textLight: '#4A6B85',
        hover: '#0D3A5C',
        bg: '#FFFFFF'
      }
    },
    {
      name: 'Steel Blue & Navy',
      description: 'Cool steel blue with navy depth',
      colors: {
        primary: '#2C3E50',
        secondary: '#FFFFFF',
        accent: '#5DADE2',
        text: '#2C3E50',
        textLight: '#7F8C8D',
        hover: '#34495E',
        bg: '#FFFFFF'
      }
    },
    {
      name: 'Navy with Light Blue',
      description: 'Deep navy with soft light blue highlights',
      colors: {
        primary: '#001529',
        secondary: '#FFFFFF',
        accent: '#87CEEB',
        text: '#001529',
        textLight: '#4A6B85',
        hover: '#002A4A',
        bg: '#FFFFFF'
      }
    },
    {
      name: 'Ocean Blue',
      description: 'Rich ocean blue - calming and professional',
      colors: {
        primary: '#0C4A6E',
        secondary: '#FFFFFF',
        accent: '#0284C7',
        text: '#0C4A6E',
        textLight: '#5B8FA8',
        hover: '#0E5A8E',
        bg: '#FFFFFF'
      }
    },
    {
      name: 'Navy Dark Mode',
      description: 'Dark navy background with bright blue accents',
      colors: {
        primary: '#E0F2FE',
        secondary: '#0A2540',
        accent: '#3B82F6',
        text: '#E0F2FE',
        textLight: '#94A3B8',
        hover: '#C7E9FE',
        bg: '#0A2540'
      }
    },
    {
      name: 'Current - Classic Black & White',
      description: 'Your current design - timeless and professional',
      colors: {
        primary: '#000000',
        secondary: '#FFFFFF',
        accent: '#000000',
        text: '#000000',
        textLight: '#666666',
        hover: '#333333',
        bg: '#FFFFFF'
      }
    }
  ];

  const ColorPreview = ({ scheme, onClick, isSelected }) => (
    <div 
      className={`border-4 p-6 cursor-pointer transition-all duration-300 ${isSelected ? 'border-black scale-105 shadow-lg' : 'border-gray-300 hover:border-gray-500'}`}
      onClick={onClick}
    >
      <h3 className="text-xl font-bold mb-2" style={{ color: scheme.colors.primary }}>
        {scheme.name}
      </h3>
      <p className="text-sm mb-4" style={{ color: scheme.colors.textLight }}>
        {scheme.description}
      </p>
      
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div 
            className="w-16 h-16 border-2 border-gray-300"
            style={{ backgroundColor: scheme.colors.primary }}
          ></div>
          <div className="flex-1">
            <div className="text-xs font-semibold mb-1">Primary</div>
            <div className="text-xs font-mono" style={{ color: scheme.colors.textLight }}>
              {scheme.colors.primary}
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <div 
            className="w-16 h-16 border-2 border-gray-300"
            style={{ backgroundColor: scheme.colors.accent }}
          ></div>
          <div className="flex-1">
            <div className="text-xs font-semibold mb-1">Accent</div>
            <div className="text-xs font-mono" style={{ color: scheme.colors.textLight }}>
              {scheme.colors.accent}
            </div>
          </div>
        </div>

        <div 
          className="p-4 rounded border-2"
          style={{ 
            backgroundColor: scheme.colors.bg,
            borderColor: scheme.colors.primary,
            color: scheme.colors.text
          }}
        >
          <div className="font-bold mb-2" style={{ color: scheme.colors.primary }}>
            Sample Text
          </div>
          <div style={{ color: scheme.colors.textLight }}>
            This is how body text would look with this color scheme.
          </div>
          <button 
            className="mt-3 px-4 py-2 text-sm font-semibold transition-colors"
            style={{ 
              backgroundColor: scheme.colors.primary,
              color: scheme.colors.secondary
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = scheme.colors.hover}
            onMouseLeave={(e) => e.target.style.backgroundColor = scheme.colors.primary}
          >
            Button Example
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold mb-4">Color Scheme Options</h1>
          <p className="text-xl text-gray-600">
            Choose a color scheme that matches your brand and style
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {colorSchemes.map((scheme, index) => (
            <ColorPreview
              key={index}
              scheme={scheme}
              onClick={() => setSelectedScheme(selectedScheme === index ? null : index)}
              isSelected={selectedScheme === index}
            />
          ))}
        </div>

        {selectedScheme !== null && (
          <div className="bg-white border-4 border-black p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">
              Selected: {colorSchemes[selectedScheme].name}
            </h2>
            <div className="bg-gray-100 p-6 rounded font-mono text-sm overflow-x-auto">
              <pre>{JSON.stringify(colorSchemes[selectedScheme].colors, null, 2)}</pre>
            </div>
            <p className="mt-4 text-gray-600">
              Let me know which color scheme you'd like to use, and I'll apply it to your portfolio!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ColorOptions;

