import { DocumentTextIcon } from '@heroicons/react/24/outline';

const MedicalRecords = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Hồ sơ bệnh án</h1>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
        <DocumentTextIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Hồ sơ bệnh án</h2>
        <p className="text-gray-600 mb-6">
          Quản lý hồ sơ bệnh án, chẩn đoán, và kê đơn thuốc cho bệnh nhân.
        </p>
        <div className="text-sm text-gray-500">
          Tính năng đang được phát triển...
        </div>
      </div>
    </div>
  );
};

export default MedicalRecords;
