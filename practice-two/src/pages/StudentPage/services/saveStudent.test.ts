import { STUDENTS_URL } from '@constants/services';
import api from '@services/apiRequest';
import { saveStudent } from './saveStudent';
import { StudentInputs } from 'src/types';

vi.mock('./apiRequest', () => ({
  __esModule: true,
  default: {
    post: vi.fn(),
    patch: vi.fn(),
  },
}));

describe('saveStudent function', () => {
  const mockApiPost = vi.spyOn(api, 'post');
  const mockApiPatch = vi.spyOn(api, 'patch');

  beforeEach(() => {
    // Clear mock calls before each test
    vi.clearAllMocks();
  });

  it('should save a new student using POST', async () => {
    const mockStudentInput = {
      email: 'test@example.com',
      name: 'test user',
      enrollNumber: 123456789,
      phone: '0912345678',
    } as StudentInputs;

    mockApiPost.mockResolvedValue({
      createdAt: new Date().toISOString(),
      name: 'test user',
      avatar: 'https://loremflickr.com/60/60',
      email: 'test@example.com',
      phone: '0912345678',
      enrollNumber: 123456789,
      id: 1,
    });

    await saveStudent(mockStudentInput);

    expect(mockApiPost).toHaveBeenCalledWith(STUDENTS_URL, mockStudentInput);
  });

  it('should update an existing student using PATCH', async () => {
    const mockStudentInput = {
      id: 1,
      email: 'test@example.com',
      name: 'test user',
      enrollNumber: 123456789,
      phone: '0912345678',
    } as StudentInputs;

    mockApiPatch.mockResolvedValue({
      createdAt: new Date().toISOString(),
      name: 'test user',
      avatar: 'https://loremflickr.com/60/60',
      email: 'test@example.com',
      phone: '0912345678',
      enrollNumber: 123456789,
      id: 1,
    });

    await saveStudent(mockStudentInput);

    expect(mockApiPatch).toHaveBeenCalledWith(
      `${STUDENTS_URL}/${mockStudentInput.id}`,
      mockStudentInput
    );
  });
});
