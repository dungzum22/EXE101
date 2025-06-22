import { UserGroupIcon } from '@heroicons/react/24/outline';

const PatientRegistration = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Đăng ký bệnh nhân</h1>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
        <UserGroupIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Đăng ký bệnh nhân mới</h2>
        <p className="text-gray-600 mb-6">
          Đăng ký thông tin bệnh nhân mới và quản lý hồ sơ bệnh nhân.
        </p>
        <div className="text-sm text-gray-500">
          Tính năng đang được phát triển...
        </div>
      </div>
    </div>
  );
};

export default PatientRegistration;
