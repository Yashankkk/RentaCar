import React, { useState } from 'react';
import { Rate, Upload, Button, Input } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { TextArea } = Input;
// const BASE_URL = import.meta.env.VITE_PROD_BASE_URL;
const Review = () => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [fileList, setFileList] = useState([]);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleFileChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);

    // Show image preview
    const file = newFileList[0]?.originFileObj;
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    } else {
      setPreviewUrl(null);
    }
  };

  // const handleSubmit = () => {
  //   console.log('Rating:', rating);
  //   console.log('Feedback:', feedback);
  //   console.log('Uploaded Files:', fileList);
  //   // Submit logic here
  // };

const handleSubmit = async () => {
  const formData = new FormData();
  formData.append("rating", rating);
  formData.append("feedback", feedback);

  if (fileList.length > 0) {
    formData.append("image", fileList[0].originFileObj);
  }

  try {
   const response = await fetch(`http://localhost:3000/api/review`, {
  method: "POST",
  body: formData,
});

    const result = await response.json();

    if (response.ok) {
      alert("Review submitted successfully!");
      console.log("Server response:", result);

      // Reset form
      setRating(0);
      setFeedback("");
      setFileList([]);
      setPreviewUrl(null);
    } else {
      alert("Submission failed: " + result.message);
    }
  } catch (error) {
    console.error("Submission error:", error);
    alert("An error occurred while submitting the review.");
  }
};



  return (
    <div className="w-full !px-4 sm:!px-6 md:!px-8 !py-10">
      <div className="max-w-md mx-auto !p-6 bg-white shadow-lg rounded-xl space-y-6">
        <h2 className="text-xl font-semibold text-center">Rate Our Service</h2>

        <Rate onChange={setRating} value={rating} className="w-full justify-center flex" />

        <TextArea
          rows={4}
          placeholder="Write your feedback..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          className="w-full"
        />

        {/* Profile Picture Circle */}
        {previewUrl && (
          <div className="flex justify-center">
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-300">
              <img
                src={previewUrl}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}

        <Upload
          beforeUpload={() => false}
          onChange={handleFileChange}
          fileList={fileList}
          maxCount={1}
          className="w-full"
        >
          <Button icon={<UploadOutlined />} className="w-full">
            Upload Profile Picture
          </Button>
        </Upload>

        <Button type="primary" onClick={handleSubmit} className="w-full">
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Review;
