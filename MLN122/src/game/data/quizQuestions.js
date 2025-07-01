const quizQuestions = [
  {
    id: 'q1',
    condition: 'always',
    question: 'Đại lượng tư bản ứng trước là gì?',
    choices: [
      'Khoản đầu tư ban đầu để sản xuất giá trị thặng dư',
      'Số lượng công nhân trong nhà máy',
      'Tổng số vàng hiện có trong game',
    ],
    correctAnswer: 'Khoản đầu tư ban đầu để sản xuất giá trị thặng dư',
    explanation: 'Đại lượng tư bản ứng trước là khoản vốn mà nhà tư bản bỏ ra ban đầu để mua tư liệu sản xuất và sức lao động, nhằm sản xuất ra giá trị thặng dư.',
  },
  {
    id: 'q2',
    condition: 'whenMachineAndWorkerOver10',
    question: 'Điều gì xảy ra khi số lượng máy móc và công nhân đều vượt quá 10?',
    choices: [
      'Năng suất tăng mạnh nhưng chi phí quản lý cũng tăng',
      'Vàng tự động tăng gấp đôi',
      'Công nhân sẽ tự động nghỉ việc',
    ],
    correctAnswer: 'Năng suất tăng mạnh nhưng chi phí quản lý cũng tăng',
    explanation: 'Khi quy mô sản xuất lớn, năng suất tăng nhưng đồng thời phát sinh thêm chi phí quản lý và các vấn đề tổ chức.',
  },
  {
    id: 'q3',
    condition: 'whenGoldBelow2',
    question: 'Nếu vàng trong kho dưới 2, điều gì phản ánh đúng nhất về tình hình doanh nghiệp?',
    choices: [
      'Doanh nghiệp gặp khó khăn về vốn lưu động',
      'Doanh nghiệp đang mở rộng quy mô',
      'Doanh nghiệp có lợi nhuận cao',
    ],
    correctAnswer: 'Doanh nghiệp gặp khó khăn về vốn lưu động',
    explanation: 'Vàng thấp phản ánh doanh nghiệp thiếu vốn lưu động để duy trì hoạt động sản xuất.',
  },
]

export default quizQuestions 