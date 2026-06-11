# VLM Academy — Backend API Documentation

**Base URL:** `http://localhost:5001/api/v1`  
**Auth:** Bearer token in `Authorization` header  
**Dev master OTP:** `000000` (works in `NODE_ENV=development`)

---

## AUTH MODULE  `/api/v1/auth`

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/sent-otp` | ❌ | Send OTP to phone or email |
| POST | `/otp/verify` | ❌ | Verify OTP → returns `token` + `isNewUser` |
| POST | `/verify-otp` | ❌ | Alias for `/otp/verify` |
| POST | `/register` | ❌ | Register without OTP flow |
| POST | `/role` | ✅ | Update user role after auth |
| GET  | `/me` | ✅ | Get current authenticated user |
| POST | `/logout` | ✅ | Clear session |
| GET  | `/google` | ❌ | Get Google OAuth redirect URL |

### POST `/auth/sent-otp`
```json
Request:  { "phone": "+919876543210", "role": "STUDENT" }
       OR { "email": "user@example.com", "role": "STUDENT" }

Response: { "message": "OTP sent to registered phone" }
```

### POST `/auth/otp/verify`
```json
Request:  { "phone": "+919876543210", "otp": "123456" }
       OR { "identifier": "user@example.com", "otp": "123456" }

Response: {
  "message": "OTP verified successfully",
  "token": "eyJ...",
  "isNewUser": true,
  "user": { "id": "...", "email": "...", "mobile": "...", "role": "STUDENT",
            "studentProfile": null, "teacherProfile": null }
}
```

---

## STUDENT MODULE  `/api/v1/student`
> All routes require `Authorization: Bearer <token>`

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/profile` | Create student profile (first time) |
| GET  | `/profile` | Get current student's full profile |
| PATCH | `/profile` | Update student profile |
| GET  | `/dashboard` | Dashboard data (name, rank, MCQ, live class, teachers) |
| GET  | `/dashboard/stats` | Quick stats (sessions, doubts, points) |
| GET  | `/referral` | Get referral codes + earned points |
| GET  | `/referral/history` | List completed referrals |
| POST | `/referral/apply` | Apply a referral code |
| GET  | `/mcq/daily` | Get today's 5 MCQ questions |
| POST | `/mcq/attempt` | Submit an MCQ answer |

### POST `/student/profile`
```json
Request:  { "fullName": "Aryan Shah", "nickname": "Aryan",
            "className": "Class 10th", "board": "CBSE",
            "city": "Mumbai", "state": "Maharashtra" }

Response: { "message": "Student profile created successfully", "data": { ... } }
```

### GET `/student/dashboard`
```json
Response: {
  "user": { "name": "Aryan", "fullName": "Aryan Shah", "rank": "#3", "points": "150" },
  "mcq": { "completed": 2, "total": 5 },
  "liveClass": { "topic": "...", "time": "...", "teacher": "...", "timer": "00:00:00" },
  "subscription": { "status": "ACTIVE", "endDate": "...", "plan": { ... } },
  "shortLiveSessions": [ { "id": "...", "tutor": "...", "rating": "4.9" } ]
}
```

### POST `/student/mcq/attempt`
```json
Request:  { "questionId": "uuid", "selectedOpt": "1.414" }
Response: { "attempt": {...}, "isCorrect": true, "correctAnswer": "1.414", "pointsEarned": 10 }
```

---

## SUBJECTS MODULE  `/api/v1/subjects`
> Public — no auth required

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | All subjects (optionally `?className=10`) |
| GET | `/:subjectId/chapters` | Chapters for a subject |

### GET `/subjects`
```json
Response: {
  "subjects": [
    { "id": "...", "name": "Mathematics", "class": "10", "code": "MATH-10",
      "chapters": [ { "id": "...", "name": "Polynomials" } ] }
  ]
}
```

---

## PLANS MODULE  `/api/v1/plans`
> Public — no auth required

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | List all plans |
| GET | `/:id` | Single plan by ID |

```json
Response: {
  "plans": [
    { "id": "...", "name": "Basic Plan", "price": 999, "duration": "30 days",
      "credits": "100", "humanChatCredits": "5",
      "audioVideoMinutes": "60", "liveClassAcess": "1" }
  ]
}
```

---

## SUBSCRIPTIONS MODULE  `/api/v1/subscriptions`
> Requires auth

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/me` | Current user's subscription |
| POST | `/trial` | Activate 3-day free trial |
| DELETE | `/cancel` | Cancel active subscription |

### POST `/subscriptions/trial`
```json
Request:  {} or { "planId": "optional-plan-id" }
Response: { "message": "Trial activated successfully",
            "subscription": { "status": "ACTIVE", "endDate": "..." },
            "trialEnds": "2026-06-14T..." }
```

---

## PAYMENTS MODULE  `/api/v1/payments`
> Requires auth

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/create-order` | Create Razorpay order |
| POST | `/verify` | Verify payment + activate subscription |
| GET  | `/history` | Payment history |

### POST `/payments/create-order`
```json
Request:  { "planId": "uuid" }
Response: { "data": { "orderId": "order_xxx", "amount": 499900,
                      "currency": "INR", "paymentId": "uuid", "keyId": "rzp_..." } }
```

### POST `/payments/verify`
```json
Request:  { "razorpay_order_id": "...", "razorpay_payment_id": "...",
            "razorpay_signature": "...", "paymentId": "uuid" }
Response: { "success": true, "message": "Payment verified and subscription activated" }
```

---

## DOUBTS MODULE  `/api/v1/doubts`
> Requires auth

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/` | Submit a doubt (multipart or JSON) |
| GET  | `/me` | My doubts (`?status=PENDING&page=1&limit=20`) |
| GET  | `/:id` | Single doubt with messages |
| PATCH | `/:id/resolve` | Mark doubt as resolved |
| POST | `/:doubtId/messages` | Add reply to doubt thread |

### POST `/doubts`
```json
Request (JSON):  { "subjectId": "uuid", "chapterId": "uuid",
                   "text": "How to solve quadratic equations?",
                   "sessionType": "Human Chat" }
Request (multipart): same fields + images[] files

Response: { "message": "Doubt submitted", "doubt": { "id": "...", "status": "PENDING", ... } }
```

---

## SESSIONS MODULE  `/api/v1/sessions`
> Requires auth

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/me` | My sessions (`?type=VIDEO&status=COMPLETED`) |
| GET | `/:id` | Single session with feedback |
| POST | `/feedback` | Submit session feedback |

### POST `/sessions/feedback`
```json
Request:  { "sessionId": "uuid", "rating": 4, "solved": true,
            "comment": "Very helpful session" }
Response: { "message": "Feedback submitted", "feedback": { "id": "...", "rating": 4 } }
```

---

## TEACHER MODULE  `/api/v1/teacher`
> Requires auth

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/profile` | Create teacher profile |
| GET  | `/profile` | Get my teacher profile |
| PATCH | `/profile` | Update teacher profile |
| GET  | `/available` | Browse available teachers |
| GET  | `/doubts` | Teacher's assigned doubts |
| POST | `/assign-doubt` | Assign doubt to teacher |
| GET  | `/sessions` | Teacher's sessions |
| POST | `/session` | Start a session with student |
| PATCH | `/session/:id/end` | End a session |

---

## CHAT MODULE  `/api/v1/chat`
> Requires auth

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/` | Create or get chat between student & teacher |
| GET  | `/student/:studentId` | All chats for a student |
| GET  | `/:chatId/messages` | Paginated messages (`?page=1&limit=50`) |
| POST | `/:chatId/messages` | Send message (REST fallback) |
| PATCH | `/messages/:messageId/read` | Mark message as read |

---

## TICKETS MODULE  `/api/v1/tickets`
> Requires auth

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/` | Create support ticket |
| GET  | `/me` | My tickets |
| GET  | `/:id` | Single ticket |
| PATCH | `/:id/status` | Update status (admin) |

### POST `/tickets`
```json
Request:  { "subject": "Payment Issue", "description": "My payment failed..." }
Response: { "message": "Ticket created", "ticket": { "id": "...", "status": "OPEN" } }
```

---

## ADMIN MODULE  `/api/v1/admin`
> Requires auth (enable `authorize('ADMIN')` for production)

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/plans` | Create a plan |
| GET  | `/plans` | List all plans |
| POST | `/subjects` | Create a subject |
| GET  | `/subjects` | List all subjects with chapters |
| DELETE | `/subjects/:id` | Delete a subject |
| POST | `/subjects/:id/chapters` | Add chapter to subject |
| POST | `/mcq/questions` | Create MCQ question |
| GET  | `/mcq/questions` | List all MCQ questions |

### POST `/admin/plans`
```json
Request:  { "name": "Premium Plan", "price": 4999, "duration": "30 days",
            "credits": "Unlimited", "humanChatCredits": "500",
            "audioVideoMinutes": "Unlimited", "liveClassAcess": "Unlimited" }
```

### POST `/admin/subjects`
```json
Request:  { "name": "Physics", "class": "11", "code": "PHY-11" }
```

### POST `/admin/mcq/questions`
```json
Request:  { "subjectId": "uuid", "question": "What is Newton's 2nd law?",
            "options": ["F=ma", "F=mv", "F=m/a", "F=a/m"],
            "answer": "F=ma", "difficulty": "EASY" }
```

---

## SOCKET.IO EVENTS

Connect to `ws://localhost:5001` with socket.io client.

| Event (emit) | Payload | Description |
|---|---|---|
| `user:online` | `userId: string` | Register user as online |
| `chat:join` | `chatId: string` | Join a chat room |
| `chat:leave` | `chatId: string` | Leave a chat room |
| `chat:message` | `{ chatId, senderId, senderType, content, images? }` | Send real-time message |
| `chat:read` | `{ messageId, chatId }` | Mark message as read |
| `chat:typing` | `{ chatId, userId, isTyping }` | Typing indicator |

| Event (listen) | Payload | Description |
|---|---|---|
| `chat:message` | Message object | New message received |
| `chat:read` | Updated message | Message read receipt |
| `chat:typing` | `{ userId, isTyping }` | Someone is typing |
| `chat:error` | `{ error: string }` | Error in message send |

---

## DATABASE MODELS SUMMARY

| Model | Key Fields |
|---|---|
| User | id, email, mobile, role (STUDENT/TEACHER/PARENT/ADMIN) |
| StudentProfile | id, userId, fullName, className, board, city, planId |
| TeacherProfile | id, userId, fullName, qualification, experience, rating |
| ParentProfile | id, userId, fullName |
| Plan | id, name, price, duration, credits, humanChatCredits |
| Subscription | id, studentId, planId, startDate, endDate, status |
| Payment | id, studentId, planId, amount, razorpayOrderId, status |
| Doubt | id, studentId, subjectId, chapterId, text, images[], status |
| Session | id, studentId, teacherId, type (CHAT/AUDIO/VIDEO), status |
| Feedback | id, sessionId/doubtId, studentId, rating, comment |
| Chat | id, studentId, teacherId |
| Message | id, chatId/doubtId, senderId, senderType, content |
| Wallet | id, userId, balance |
| Referral | id, referrerId, refereeId, type, code, status, pointsGiven |
| McqQuestion | id, subjectId, question, options[], answer, difficulty |
| McqAttempt | id, studentId, questionId, selectedOpt, isCorrect |
| SupportTicket | id, userId, subject, description, status |
| Subjects | id, name, class, code |
| Chapters | id, name, subjectId |
| OTP | id, identifier, otp, expiresAt |

---

## DEVELOPMENT NOTES

- **Dev master OTP:** `000000` bypasses real OTP in `NODE_ENV=development`
- **Seed data:** Run `npm run seed` to populate plans, subjects, chapters, MCQ questions
- **Frontend base URL:** Set `VITE_API_BASE_URL=http://localhost:5001/api/v1` in `vlm-frontend/.env`
- **Cloudinary:** Set `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET` in `.env` for image uploads
- **Razorpay:** Set `RAZORPAY_KEY_ID` and `RAZORPAY_KEY_SECRET` in `.env` for payments
- **Twilio trial:** Add phone numbers at twilio.com/user/account/phone-numbers/verified for SMS OTP testing
