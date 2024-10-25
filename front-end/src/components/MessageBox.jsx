import React, { useState } from 'react';
import { User, Link, Smile, Paperclip, X, Trash2, MoreVertical, Send, Expand, Minimize } from 'lucide-react';
import './messagebox.scss';

const MessageBox = ({ toggleMessageBox, recipientName, profilePic}) => {
  const [emailContent, setEmailContent] = useState('');
  const [subject, setSubject] = useState('');
  const [attachment, setAttachment] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="email-composer">
      {/* Header */}
      <div className="composer-header">
        <div className="sender-info">
          <div className="avatar">
            <img src={profilePic} alt="User avatar" />
          </div>
          <div className="recipient-name">
            <span>To : {recipientName}</span>
          </div>
        </div>
        <div className="window-controls">
          <button className="control-btn">
            <Minimize className="icon" />
          </button>
          <button className="control-btn">
            <Expand className="icon" />
          </button>
          <button className="control-btn">
            <X className="icon" onClick={toggleMessageBox}/>
          </button>
        </div>
      </div>

      {/* Subject */}
      <div className="composer-subject">
        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </div>

      {/* Email Content */}
      <div className="composer-content">
        <div className="recipient">
          <span>Hey </span>
          <span className="mention">@{recipientName}</span>
        </div>
        <textarea
          value={emailContent}
          onChange={(e) => setEmailContent(e.target.value)}
          placeholder="Write your message..."
        />
        
        {/* Attachment Preview */}
        {attachment && (
          <div className="attachment-preview">
            <img src="/api/placeholder/20/20" alt="File icon" />
            <span className="filename">{attachment.name}</span>
            <span className="filesize">{attachment.size}</span>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="composer-footer">
        <div className="left-controls">
          <button className="control-btn">
            <Trash2 className="icon" />
          </button>
          <button className="control-btn">
            <MoreVertical className="icon" />
          </button>
        </div>
        
        <div className="right-controls">
          <div className="formatting-tools">
            <button className="control-btn">
              <Paperclip className="icon" />
            </button>
            <button className="control-btn">
              <Smile className="icon" />
            </button>
            <button className="control-btn">
              <Link className="icon" />
            </button>
          </div>
          
          <button className="send-button">
            <Send className="icon" />
            <span>Send now</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageBox;