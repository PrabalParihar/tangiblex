"use client"
import { useState } from 'react';

interface Property {
    id: string;
    title: string;
    description: string;
    image: string;
    status: string;
    availableShares: string;
    expectedProfit: string;
    shareInfo: string;
  }

  const PropertyCard = ({ property }: { property: Property }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
    <div className="relative">
      <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-sm">
        {property.status}
      </div>
      <img 
        src={property.image} 
        alt={property.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="text-xs text-gray-500">{property.id}</span>
        </div>
        <h3 className="text-lg font-semibold mb-2">{property.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{property.description}</p>
        
        <div className="flex justify-between mb-4">
          <div>
            <p className="text-sm text-gray-500">Available shares</p>
            <p className="text-lg font-semibold">{property.availableShares}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Expected profit</p>
            <p className="text-lg font-semibold text-green-600">{property.expectedProfit}%</p>
          </div>
        </div>
        
        <div className="border-t pt-4">
          <p className="text-sm text-gray-500 mb-4">{property.shareInfo}</p>
          <div className="flex gap-2">
            <input 
              type="number" 
              placeholder="1"
              className="w-24 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span className="py-2">Shares</span>
            <button className="ml-auto bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

interface CreateProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: () => void;
}

const CreateProjectModal = ({ isOpen, onClose, onCreate }: CreateProjectModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg w-full max-w-md relative">
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div className="p-6">
          <h2 className="text-xl text-black font-semibold mb-6">Create a project</h2>
          
          <div className="space-y-4">
            <div className="border-2 border-dashed rounded-lg p-8 flex flex-col items-center justify-center">
              <svg className="w-12 h-12 text-blue-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <input 
                type="text" 
                placeholder="Image URL" 
                className="mt-4 text-black w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <input 
              placeholder="Name" 
              className="w-full text-black px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required 
            />
            
            <input 
              placeholder="Description" 
              className="w-full text-black px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required 
            />
            
            <div className="flex gap-2">
              <input 
                placeholder="Goal amount" 
                className="flex-1 text-black px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required 
              />
              <span className="py-2">HBAR</span>
            </div>
            
            <div className="flex gap-2">
              <input 
                placeholder="Expected profit" 
                type="number" 
                className="flex-1 px-3 text-black py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required 
              />
              <span className="py-2">%</span>
            </div>
            
            <div className="flex gap-2">
              <input 
                placeholder="Builder fee" 
                type="number" 
                className="flex-1 px-3 py-2 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required 
              />
              <span className="py-2">%</span>
            </div>
            
            <input 
              placeholder="Total shares" 
              type="number" 
              className="w-full text-black px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required 
            />
            
            <input 
              type="date" 
              placeholder="Fundraising deadline" 
              className="w-full text-black px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required 
            />
            
            <button 
              onClick={() => {
                onCreate();
                onClose();
              }}
              className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ListingPage = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [properties] = useState([
    {
      id: '0xb7...e441',
      title: 'Beautiful high design villa',
      description: 'Elevate portfolio value for a luxury living.',
      image: '/api/placeholder/400/300',
      status: 'Expired',
      availableShares: '1,000/1000',
      expectedProfit: '15',
      shareInfo: '1 share = 1 HBAR (~1 USD)'
    },
    {
      id: '0xb7...e441',
      title: 'Scenic Countryside Retreat',
      description: 'Own a share in a peaceful countryside retreat with panoramic views.',
      image: '/api/placeholder/400/300',
      status: 'Expired',
      availableShares: '50/50',
      expectedProfit: '23',
      shareInfo: '1 share = 1 HBAR (~1 USD)'
    }
  ]);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold text-black">TangibleX</h1>
          </div>
          <button 
            onClick={() => setIsCreateModalOpen(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
          >
            <span>Create</span>
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {properties.map((property, index) => (
            <PropertyCard key={index} property={property} />
          ))}
        </div>

        <CreateProjectModal 
          isOpen={isCreateModalOpen}
          onClose={() => setIsCreateModalOpen(false)}
          onCreate={() => {
            console.log('Creating project');
            setIsCreateModalOpen(false);
          }}
        />
      </div>
    </div>
  );
};