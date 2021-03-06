# 영상필터

필터는 영상을 흐릿하게 만들거나 또렷하게 만들기도 해서 영상의 품질을 높이기도 하지만 경계를 검출하고 방향을 알아내는 등  
객체 인식과 분리의 기본이 되는 정보를 계산하기도 한다.

## 컨볼루션과 블러핑

컨볼루션(convolution)연산은 공간 영역 필터의 핵심이라 할 수 있다. 영상을 흐릿하게 만드는 블러링(blurring)을 사례로 컨볼루션 연산을 알아보자.

### 필터와 컨볼루션

공간 영역 필터는 연산 대상 픽셀과 그 주변 픽셀 값을 활용하는데, 이때 그 주변 픽셀들 중에 어디까지를 포함할 것인지,  
그리고 결과 값을 어떻게 산출할 것인지를 결정하는 것이 커널이다. n x n 크기의 커널은 윈도우, 필터, 마스크라고도 부르는데,  
커널의 각 요소와 대응하는 입력 픽셀 값을 곱해서 모두 합한 것을 결과 픽셀 값으로 결정하고, 이것을 마지막 픽셀까지 반복하는것을 컨볼루션 연산이라고 한다.

Opencv는 컨볼루션 연산을 담당하는 CV2.filter2D( )함수를 제공한다.

##### dst = cv2.filter2D(src, ddepth, kernel [, dst, anchor, delta, borderType ] )
* src : 입력 영상, numpy 배열
* ddepth : 출력 영상의 dtype
    * -1 : 입력 영상과 동일
    * CV_8U, CV16/CV165, CV_32F, CV_64F
* kernel : 컨볼루션 커널, float32의 n x n 크기의 배열
* dst : 결과 영상, numpy 배열
* anchor : 커널의 기준점 / default : 중심점(-1,-1)
* delta : 필터 적용된 결과에 추가할 값
* borderType : 외곽 픽셀 보정 방법 지정

### 평균 블러핑

영상을 초점이 맞지 않은 것처럼 흐릿하게 만드는 것을 블러링(blurring)또는 스무딩(smoothing)이라고 한다.  
블러링을 적용하는 가장 손쉬운 방법은 주면 픽셀 값들의 평균을 적용하는 것이다. 

#### 평균 필터를 생성해서 블러 적용


```python
import cv2
import numpy as np

img = cv2.imread('./img/girl.jpg')

'''
5x5 평균 필터 커널 생성
kernel = np.array([[0.04, 0.04, 0.04, 0.04, 0.04],
                  [0.04, 0.04, 0.04, 0.04, 0.04],
                  [0.04, 0.04, 0.04, 0.04, 0.04],
                  [0.04, 0.04, 0.04, 0.04, 0.04],
                  [0.04, 0.04, 0.04, 0.04, 0.04]])
'''
# 5x5 평균 필터 커널 생성
kernel = np.ones((5,5))/5**2
# 필터 적용
blured = cv2.filter2D(img, -1, kernel)

cv2.imshow('origin', img)
cv2.imshow('avrg blur', blured)
cv2.waitKey()
cv2.destroyAllWindows()
```

![opencv](/assets/img/opencv/basic/opencvch6_1.png)

openCV에서 커널을 생성하지 않고 평균 블러를 할 수 있게 함수를 제공한다.

##### dst = cv2.blur(src, ksize[, dst, anchor, borderType ] )
* src : 입력 영상, Numpy 배열
* ksize : 커널의 크기
* 나머지 인자는 cv2.filter2D( )와 동일
##### dst = cv2.boxFilter(src, ddepth, ksize [, dst, anchor, normalize, borderType ] )
* src : 입력 영상,numpy 배열
* ddepth : 출력 영상의 dtype / -1 : 입력 영상과 동일
* normalize : 커널 크기로 정규화(1/ksize^2)지정 여부, 불(boolean)
* 나머지 인자는 CV2.FIlter2D( )와 동일


#### 블러 전용 함수 적용


```python
import cv2
import numpy as np

file_name = './img/taekwonv1.jpg'
img = cv2.imread(file_name)

# blur()함수로 블러링
blur1 = cv2.blur(img, (10,10))
# boxFilter()함수로 플러링 적용
blur2 = cv2.boxFilter(img, -1, (10,10))

merged = np.hstack( (img, blur1, blur2))
cv2.imshow('blur', merged)
cv2.waitKey(0)
cv2.destroyAllWindows()
```

![opencv](/assets/img/opencv/basic/opencvch6_2.png)

### 가우시안 블러링

평균이 아닌 가우시안 분포를 갖는 커널로 블러링을 하는 것을 가우시안 블러링이라고 한다.  
아래에 나타낸 커널처럼 중앙 값이 가장 크고 멀어질수록 그 값이 작아지는 커널을 사용하는 것을 말한다.  

![opencv](/assets/img/opencv/basic/opencvch6_3.png)

이렇게 하면 새로운 픽셀 값을 선정할 때 대상 픽셀에 가까울수록 많은 영향을 주고,  
멀어질수록 적은 영향을 주기 때문에 원래의 영상과 비슷하면서도 노이즈를 제거하는 효과가 있다.  

opencv는 가우시안 분포 커널로 블러링을 적용하는 함수를 제공한다.

##### cv2.GaussianBlur(src, ksize, sigmaX [, sigmaY, borderType ] )
* src : 입력 영상
* ksize : 커널 크기, 홀수
* sigmaX : X방향 표준편차
    * 0 : auto / σ = 0.3*((ksize - 1)*0.5 - 1) + 0.8
    
* sigmaY : Y방향 표준편차
    * default : sigmaX
    
* borderType : 외곽 테두리 보정 방식

##### ret : cv2.getGaussianKernel(ksize, sigma[, ktype ] )
* ret : 가우시안 커널(1차원이므로 ret*ret.T 형태로 사용)


```python
import cv2
import numpy as np

img = cv2.imread('./img/gaussian_noise.jpg')

# 가우시안 커널을 직접 생성해서 블러링
k1 = np.array([[1, 2, 1],
              [2, 4, 2],
              [1, 2, 1]])*(1/16)
blur1 = cv2.filter2D(img, -1, k1)

# 가우시안 커널을 API로 얻어서 블러링
k2 = cv2.getGaussianKernel(3, 0)
blur2 = cv2.filter2D(img, -1, k2*k2.T)

# 가우시안 블러 API로 블러링
blur3 = cv2.GaussianBlur(img, (3, 3), 0)

print('k1:', k1)
print('k2:', k2*k2.T)

merged = np.hstack((img, blur1, blur2, blur3))
cv2.imshow('gaussian blur', merged)
cv2.waitKey(0)
cv2.destroyAllWindows()
```

    k1: [[0.0625 0.125  0.0625]
     [0.125  0.25   0.125 ]
     [0.0625 0.125  0.0625]]
    k2: [[0.0625 0.125  0.0625]
     [0.125  0.25   0.125 ]
     [0.0625 0.125  0.0625]]


![opencv](/assets/img/opencv/basic/opencvch6_4.png)

### 미디언 블러링

커널 영역 픽셀 값 중에 중간 값을 대상 픽셀의 값으로 선택하는 것을 미디언(median)블러링이라고 한다.  
이 필터는 소금-후추 잡음 제거에 효과적이다.  
opencv는 이것을 위해 cv2.medianBlur() 함수를 제공한다.

##### dst = cv2.medianBlur(src, ksize)
* src : 입력영상, numpy 배열
* ksize : 커널 크기


```python
import cv2
import numpy as np

img = cv2.imread('./img/salt_pepper_noise.jpg')

# 미디언 블러 적용
blur = cv2.medianBlur(img, 5)

merged = np.hstack((img,blur))
cv2.imshow('media', merged)
cv2.waitKey(0)
cv2.destroyAllWindows()
```

![opencv](/assets/img/opencv/basic/opencvch6_5.png)

### 바이레터럴 필터

블러링 필터는 잡음을 제거하는데 효과가 있지만, 경계도 흐릿하게 만드는 문제를 갖고있다.  
바이레터럴(bilateral)필터는 이 문제를 개선하기 위해 가우시안 필터와 경계필터 2개를 사용하는데,  
그 결과 노이즈는 없고 경계가 또렷한 영상을 얻을 수 있지만 속도가 느리다는 단점이 있다.

##### dst = cv2.bilateralFilter(src, d, sigmaColor, sigmaSpace[, dst, borderType] )
* src : 입력 영상, Numpy 배열
* d : 필터의 직경(diameter), 5보다 크면 매우느림
* sigmaColor : 색공간 필터의 시그마 값
* sigmaSpace : 좌표 공간의 시그마 값(단순한 사용을 위해 sigmaColor와 sigmaSpace에 같은 값을 사용할 것을 권장하며,  
                범위는 10~150을 권장함)


```python
import cv2
import numpy as np

img = cv2.imread('./img/gaussian_noise.jpg')

# 가우시안 필터 적용
blur1 = cv2.GaussianBlur(img, (5,5), 0)
# 바이레터럴 필터 적용
blur2 = cv2.bilateralFilter(img, 5, 75, 75)

merged = np.hstack((img, blur1, blur2))
cv2.imshow('bilateral', merged)
cv2.waitKey(0)
cv2.destroyAllWindows()
```

![opencv](/assets/img/opencv/basic/opencvch6_6.png)

## 경계 검출

영상에서 경계(edge)를 검출하는 것은 배경과 전경을 분리하는데 가장 기본적인 작업이다.  
앞에서 필터는 영상을 흐릿하게 만들었는데, 그 반대로 영상의 경계를 선명하게 만드는 것을 샤프닝(sharping)이라고 한다.  
샤프닝은 경계를 검출해서 경계에 있는 픽셀만을 골라서 강조하는 것을 말한다.

### 기본 미분 필터

경계를 검출하려면 픽셀 깞의 변화가 갑자기 크게 일어나는 지점을 찾아내야 하는데, 이것은 연속된 픽셀 값에 미분 연산을 하면 알 수 있다.  
간소화한 미분 공식은 아래와 같다.
![opencv](/assets/img/opencv/basic/opencvch6_7.png)  
![opencv](/assets/img/opencv/basic/opencvch6_8.png)  
영상에 대한 미분 연산을 컨볼루션 커널로 만들면 다음과 같다.
![opencv](/assets/img/opencv/basic/opencvch6_9.png)  
![opencv](/assets/img/opencv/basic/opencvch6_10.png)  


```python
import cv2
import numpy as np

# np.set_printoptions(threshold=np.inf, linewidth=np.inf) 결과를 생략하지 않고 모두 출력할수 있게.

img = cv2.imread('./img/sudoku.jpg')

# 미분커널 생성
gx_kernel = np.array([[-1, 1]])
gy_kernel = np.array([[-1, 1]])

# 필터 적용
edge_gx = cv2.filter2D(img, -1, gx_kernel)
edge_gy = cv2.filter2D(img, -1, gx_kernel)

merged = np.hstack((img, edge_gx, edge_gy))
cv2.imshow('edge', merged)
cv2.waitKey(0)
cv2.destroyAllWindows()

```

![opencv](/assets/img/opencv/basic/opencvch6_11.png)  

### 로버츠 교차 필터

로버츠는 기본 미분 커널을 개선한 커널을 제안했다.

![opencv](/assets/img/opencv/basic/opencvch6_12.png)  
![opencv](/assets/img/opencv/basic/opencvch6_13.png)  

이 커널은 대각선 방향으로 1과 -1을 배치해서 사선경계 검출 효과를 높였지만  
노이즈에 민감하고 엣지 강도가 약한 단점이 있다.


```python
import cv2
import numpy as np

img = cv2.imread('./img/sudoku.jpg')

# 로버츠 커널 생성
gx_kernel = np.array([[1,0], [0,-1]])
gy_kernel = np.array([[0,1], [-1,0]])
# 커널 적용
edge_gx = cv2.filter2D(img, -1, gx_kernel)
edge_gy = cv2.filter2D(img, -1, gx_kernel)

merged = np.hstack((img, edge_gx, edge_gy))
cv2.imshow('roberts cross', merged)
cv2.waitKey(0)
cv2.destroyAllWindows()

```

![opencv](/assets/img/opencv/basic/opencvch6_14.png)  

### 프리윗 필터

프리윗이 개발한 프리윗 마스크는 각 방향으로 차분을 세번 계산하도록 배치해서 엣지 강도가 강하고 수직과 수평엣지를 동등하게 찾는 장점이 있지만  
대각선 검출이 약하다.

![opencv](/assets/img/opencv/basic/opencvch6_15.png)  
![opencv](/assets/img/opencv/basic/opencvch6_16.png)  


```python
import cv2
import numpy as np

file_name = 'img/sudoku.jpg'
img = cv2.imread(file_name)
# 프리윗 커널 생성
gx_kernel = np.array([[-1,0,1], [-1,0,1], [-1,0,1]])
gy_kernel = np.array([[-1,-1,-1], [0,0,0], [1,1,1]])

# 프리윗 커널 필터 적용
edge_gx = cv2.filter2D(img, -1, gx_kernel)
edge_gy = cv2.filter2D(img, -1, gx_kernel)

merged = np.hstack((img, edge_gx, edge_gy, edge_gx+edge_gy))
cv2.imshow('prewitt cross', merged)
cv2.waitKey(0)
cv2.destroyAllWindows()
```

![opencv](/assets/img/opencv/basic/opencvch6_17.png)  

### 소벨 필터

소벨은 중심 픽셀의 차분 비중을 두배로 주어 수평, 수직 대각선 경계 검출에 모두 강한 마스크를 제안한다.

![opencv](/assets/img/opencv/basic/opencvch6_18.png)  
![opencv](/assets/img/opencv/basic/opencvch6_19.png)  

소벨 맛크는 가장 대표적인 1차 미분 마스크로 Opencv에서는 이를 위한 전용 함수를 제공한다.

##### dst = cv2.Sovel(src, ddepth, dx, dy[, dst, ksize, scale, delta, borderType ] )
* src :  입력 영상, numpy배열
* ddepth : 출력 영상의 dtype(-1 : 입력 영상과 동일)
* dx, dy : 미분 차수(0,1,2 중 선택, 둘 다 0일 수는 없음)
* ksize : 커널의 크기(1, 3, 5, 7 중 선택)
* scale : 미분에 사용할 계수
* delta : 연산 결과에 가산할 값


```python
import cv2
import numpy as np

img = cv2.imread('img/sudoku.jpg')

# 소벨 커널을 직접 생성해서 경계 검출
gx_k = np.array([[-1,0,1], [-2,0,2], [-1,0,1]])
gy_k = np.array([[-1,-2,-1], [0,0,0], [1,2,1]])
# 소벨 필터 적용
edge_gx = cv2.filter2D(img, -1, gx_k)
edge_gy = cv2.filter2D(img, -1, gx_k)
# 소벨 API로 경계 검출
sobelx = cv2.Sobel(img, -1, 1, 0, ksize=3)
sobely = cv2.Sobel(img, -1, 0, 1, ksize=3)

merged1 = np.hstack((img, edge_gx, edge_gy, edge_gx+edge_gy))
merged2 = np.hstack((img, sobelx, sobely, sobelx+sobely))
merged = np.vstack((merged1, merged2))
cv2.imshow('sobel', merged)
cv2.waitKey(0)
cv2.destroyAllWindows()

```

![opencv](/assets/img/opencv/basic/opencvch6_20.png)  

### 샤르 필터

소벨 필터는 커널의 크기가 작은 경우, 또는 커널의 크기가 크더라도 그 중심에서 멀어질수록 엣지 방향성의 정확도가 떨어지는 단점이 있따.  
이를 개선하한 필터가 샤르필터이다.

![opencv](/assets/img/opencv/basic/opencvch6_21.png)  
![opencv](/assets/img/opencv/basic/opencvch6_22.png)  

Opencv는 cv2.Scharr()함수를 제공한다.  

##### dst = cv2.Sharr(scr, ddepth, dx, dy [, dst, scale, delta, borderType ] )
함수 인자는 cv2.Sobel()과 동일


```python
import cv2
import numpy as np

img = cv2.imread('img/sudoku.jpg')
# 샤르 커널을 직접 생성해서 경계 검출
gx_k = np.array([[-3,0,3], [-10,0,10], [-3,0,3]])
gy_k = np.array([[-3,-10,-3], [0,0,0], [3,10,3]])
edge_gx = cv2.filter2D(img, -1, gx_k)
edge_gy = cv2.filter2D(img, -1, gx_k)

# 샤르 API로 경계 검출
scharrx = cv2.Scharr(img, -1, 1, 0)
scharry = cv2.Scharr(img, -1, 0, 1)

merged1 = np.hstack((img, edge_gx, edge_gy))
merged2 = np.hstack((img, scharrx, scharry))
merged = np.vstack((merged1, merged2))
cv2.imshow('Scharr', merged)
cv2.waitKey(0)
cv2.destroyAllWindows()
```

![opencv](/assets/img/opencv/basic/opencvch6_23.png)  

### 라플라시안 필터

라플라시안 필터는 대표적인 2차 미분 마스크이다.
![opencv](/assets/img/opencv/basic/opencvch6_24.png)  
![opencv](/assets/img/opencv/basic/opencvch6_25.png)  
![opencv](/assets/img/opencv/basic/opencvch6_26.png)  
이 수식을 커널로 표현하면 아래와 같다.
![opencv](/assets/img/opencv/basic/opencvch6_27.png)  

opencv는 라플라시안 필터를 위한 함수로 cv2.Laplacian()을 제공한다.

##### dst = cv2.Laplacian(src, ddepth[, dst, ksize, scale, delta, borderType) ]
함수 인자는 cv2.Sobel()과 동일


```python
import cv2
import numpy as np

img = cv2.imread('./img/sudoku.jpg')
# 라플라시안 필터 적용
edge = cv2.Laplacian(img, -1)

merged = np.hstack((img, edge))
cv2.imshow('Laplacian', merged)
cv2.waitKey(0)
cv2.destroyAllWindows()
```

    2021-10-10 00:51:35.141 python[82970:11603208] TSMSendMessageToUIServer: CFMessagePortSendRequest FAILED(-1) to send to port com.apple.tsm.uiserver
    2021-10-10 00:51:35.159 python[82970:11603208] TSMSendMessageToUIServer: CFMessagePortSendRequest FAILED(-1) to send to port com.apple.tsm.uiserver
    2021-10-10 00:51:35.176 python[82970:11603208] TSMSendMessageToUIServer: CFMessagePortSendRequest FAILED(-1) to send to port com.apple.tsm.uiserver


![opencv](/assets/img/opencv/basic/opencvch6_28.png)  

### 캐니 엣지

캐니가 제안한 캐니 엣지 알고리즘은 한 가지 필터를 사용하는 것이 아니라 4단계의 알고리즘을 적용한 잡음에 강한 뛰어난 엣지 검출기 이다.
1. 노이즈 제거(Noise Reduction) : 5 x 5가우시안 블러링 필터로 노이즈를 제거
2. 엣지 그레디언트 방향 계산 : 소벨 마스크로 엣지 및 그레디언트 방향을 검출
3. 비최대치 억제(Non-Maximum Supperssion) : 그레디언트 방향에서 검출된 엣지 중에 가장 큰 값만 선택하고 나머지는 제거한다.
4. 이력 스레시홀딩(Hysteresis Thresholding) : 두 개의 경계값(Max, Min)을 지정해서 경계 영역에 있는 픽셀들 중 큰 경계값 밖의 픽셀과 연결성이 없는 픽셀을 제거  

Opencv는 이와 같은 알고리즘을 구현한 cv2.Canny()함수를 제공한다.

##### edges = cv2.Canny(img, threshold1, thershold2 [, edges, apertureSize, L2gardient ] )
* img :  입력 영상, Numpy배열
* threshold1, threshold2 : 이력 스레시홀딩에 사용할 최소, 최대값 
* apertureSize : 소벨 마스크에 사용할 커널 크기
* L2gradient : 그레이디언트 강도를 구할 방식 지정 플래그
    * True : (Gx^2 + Gy^2)^0.5
    * False : |Gx| + |Gy|
* edges : 엣지 결과 값을 갖는 2차원 배열


```python
import cv2
import numpy as np

img = cv2.imread('./img/sudoku.jpg')

edges = cv2.Canny(img, 100, 200)

cv2.imshow('Original', img)
cv2.imshow('Canny', edges)
cv2.waitKey(0)
cv2.destroyAllWindows()
```

![opencv](/assets/img/opencv/basic/opencvch6_29.png)  

## 모폴로지(morphology)

모폴로지는 형태학이란 뜻으로 영상 분야에서는 노이즈 제거, 구멍 메꾸기, 연결되지 않은 경계 이어붙이기 등 영상 연산을 말한다.  
모폴로지는 주로 형태를 다루는 연산이므로 바이너리 이미지를 대상으로 한다.  
대표적인 연산은 침식과 팽창이며, 이 둘을 결합한 열림과 닫힘 연산이 있다. 

### 침식 연산

침식(erosion)은 원래 있던 객체의 영역을 깎아 내는 연산이다. 이 연산을 위해서는 구조화 요소(structuring element)라는 0과 1로 채워진 커널이 필요한데,  
1이 채워진 모양에 따라 사각형, 타원형, 십자형 등 을 사용할 수 있다.  
침식 연산은 구조화 요소 커널을 입력 영상에 적용해서 1로 채워진 영역을 온전히 올려 놓을 수 없으면 해당 픽셀을 0으로 변경한다.  

opencv는 구조화 요소 커널 생성을 위한 함수로는 cv2.getStructuringElement()를, 침식을 위한 함수로 cv2.erode()를 제공한다.
##### cv2.getStructuringElement(shape, ksize, anchor] )
* shape : 구조화 요소 커널의 모양 결정
    * cv2.MORPH_RECT : 사각형
    * cv2.MORPH_ELLIPSE : 타원형
    * cv2.MORPH_CROSS : 십자형
* ksize : 커널 크기
* anchor : 구조화 요소의 기준점, cv2.MORPH_CROSS에서만 의미 있고 기본값은 중심점(-1,-1)

##### dst = cv2.erode(src, kernel [, anchor, iterations, borderType, borderValue] )
* src : 입력 영상, Numpy 객체, 바이너리 영상(검은색 : 배경 / 흰색 : 전경)
* kernel : 구조화 요소 커널 객체
* anchor : cv2.getStructuringElement()와 동일
* iterations : 침식 연산 적용 반복 횟수
* borderType : 외곽 영역 보정 방법 설정 플래그
* borderValue : 외곽 영역 보정 값

침식 연산은 큰 물체는 주변을 깎아서 작게 만들지만 작은 객체는 아예 사라지게 만들 수 있으므로 아주 작은 노이즈를 제거하거나 원래는 따로 떨어진 물체인데 겹쳐져서 하나의 물체로 보일 때 서로를 떼어내는 데도 효과적이다.



```python
import cv2
import numpy as np

img = cv2.imread('./img/morph_dot.png')

# 구조화 요소 커널, 사각형(3X3) 생성
k = cv2.getStructuringElement(cv2.MORPH_RECT, (3,3))
# 침식 연산 적용
erosion = cv2.erode(img, k)

merged = np.hstack((img, erosion))
cv2.imshow('Erode', merged)
cv2.waitKey(0)
cv2.destroyAllWindows()
```

![opencv](/assets/img/opencv/basic/opencvch6_30.png)  

### 팽창 연산

팽창(dilatation)은 침삭과는 반대로 영상 속 사물의 주변을 덧붙여서 영역을 더 확장하는 연산이다. 침식 연산과 마찬가지로 구조화 요소 커널을 입력 영상에 적용해서 1로 채워진 영역이 온전히 덮이지 않으면 1로 채워넣는다.
Opencv는 팽창을 위한 함수를 아래와 같이 제공한다. 

##### dst = cv2.dilate(src, kernel[, dst, anchor, iterations, borderType, borderValue] ) 
모든 인자는 cv2.erode()함수와 동일


```python
img = cv2.imread('./img/morph_hole.png')

# 구조화 요소 커널, 사각형(3X3) 생성
k = cv2.getStructuringElement(cv2.MORPH_RECT, (3,3))
# 팽창 연산 적용
dst = cv2.dilate(img, k)

merged = np.hstack((img, dst))
cv2.imshow('Dilation', merged)
cv2.waitKey(0)
cv2.destroyAllWindows()
```

![opencv](/assets/img/opencv/basic/opencvch6_31.png)

### 열림과 닫힘, 그밖의 모폴로지 연산

침식과 팽창 연산은 밝은 부분이나 어두운 부분의 점 노이즈를 없애는 데 효과적이지만, 원래의 모양이 홀쭉해지거나 뚱뚱해지는 변형이 일어난다. 그런데 침식과 팽창 연산을 조합하면 우너래의 모양을 유지하면서 노이즈만 제거할 수 있다.  
침식 연산을 적용하고 나서 팽창 연산을 적용하는 것을 열림(opening)연산이라고 한다.  
열림 연산은 주변보다 밝은 노이즈 제거에 효과적이면서 맞닿아 있는 것으로 보이는 독립된 개체를 분리하거나 돌출된 픽셀을 제거하는 데 좋다.  
반대로 팽창 여난을 먼저 적용하고 침식 연산을 나중에 적용하는 연산을 닫힘(closing)연산 이라고 하고 주변보다 어두운 노이즈 제거에 효과적이면서 끊어져 보이는 개체를 연결하거나 구멍을 메우는 데 좋다.  

열림 = 침식 -> 팽창
닫힘 = 팽창 -> 침식

팽창한 결과에서 침식한 결과를 빼면 경계만 얻게 되는데, 앞서 살펴본 경계 검출과 비슷한 결과를 얻을 수 있어서 이것을 그레이디언트(gradient)연산이라고 한다.
또, 원본에서 열림 연산 결과를 빼면 밝기 값이 크게 튀는 영역을 강조할 수 있고 닫힘 연산 결과에서 원본을 빼면 어두운 부분을 강조할 수 있다.
이것을 각각 탑햇(top hat)과 블랙햇(black hat)연산 이라고 한다.

그레이디언트 = 팽창 - 침식
탑햇 = 원본 - 열림
블랙햇 = 닫힘 - 원본

opencv는 열임과 닫힘 연산 그리고 그밖의 모폴로지 연산을 위해 함수를 제공한다.

##### dst = cv2.morphologyEx(src, op, kernel [, dst, anchor, iteration, borderType, borderValue] )
* src : 입력 영상, numpy배열
* op : 모폴로지 연산 종류 지정
    * cv2.MORPH_OPEN :열림 연산
    * cv2.MORPH_CLOSE :닫힘 연산
    * cv2.MORPH_GRADIENT : 그레이디언트 연산
    * cv2.MORPH_TOPHAT : 탑햇 연산
    * cv2.MORPH_BLACKHAT : 블랙햇 연산
* kernel :구조화 요소 커널
* dst : 결과 영상
* anchor : 커널의 기준점
* iteration : 연산 반복 횟수
* borderType : 외곽 보정 방식
* borderValue : 외곽 보정 값

#### 열림과 닫힘 연산으로 노이즈 제거


```python
img1 = cv2.imread('./img/morph_dot.png', cv2.IMREAD_GRAYSCALE)
img2 = cv2.imread('./img/morph_hole.png', cv2.IMREAD_GRAYSCALE)

# 구조화 요소 커널, 사각형 (5x5) 생성
k = cv2.getStructuringElement(cv2.MORPH_RECT, (5,5))
# 열림 연산 적용
opening = cv2.morphologyEx(img1, cv2.MORPH_OPEN, k)
# 닫힘 연산 적용
closing = cv2.morphologyEx(img2, cv2.MORPH_CLOSE, k)

merged1 = np.hstack((img1, opening))
merged2 = np.hstack((img2, closing))
merged3 = np.vstack((merged1, merged2))
cv2.imshow('opening, closing', merged3)
cv2.waitKey(0)
cv2.destroyAllWindows()
```

![opencv](/assets/img/opencv/basic/opencvch6_32.png)

#### 모폴로지 그레이디언트


```python
img = cv2.imread('./img/morphological.png')

# 구조화 요소 커널, 사각형(3x3) 생성
k = cv2.getStructuringElement(cv2.MORPH_RECT, (3,3))
# 열림 연산 적용
gradient = cv2.morphologyEx(img, cv2.MORPH_GRADIENT,k)

merged = np.hstack((img, gradient))
cv2.imshow('gradient', merged)
cv2.waitKey(0)
cv2.destroyAllWindows()
```

![opencv](/assets/img/opencv/basic/opencvch6_33.png)

#### 모폴로지 탑햇, 블랙햇 연산


```python
img = cv2.imread('./img/moon_gray.jpg')

# 구조화 요소 커널, 사각형 (5x5) 생성
k = cv2.getStructuringElement(cv2.MORPH_RECT, (9,9))
# 탑햇 연산 적용
tophat = cv2.morphologyEx(img, cv2.MORPH_TOPHAT, k)
# 블랙햇 연산 적용
blackhat = cv2.morphologyEx(img, cv2.MORPH_BLACKHAT, k)

merged = np.hstack((img, tophat, blackhat))
cv2.imshow('tophat blackhat', merged)
cv2.waitKey(0)
cv2.destroyAllWindows()
```

![opencv](/assets/img/opencv/basic/opencvch6_34.png)

## 이미지 피라미드

이미지 피라미드(Image pyramids)는 영상의 크기를 단계적으로 축소 또는 확대해서 피라미드처럼 쌓여 놓은 것을 말한다.  
이렇게 하는 이유는 영상을 분석할 때 먼저 작은 이미지로 빠르게 훑어보고 다음 단계 크기의 영상으로 분석하는 식으로 정확도를 높이는 것이 효율적이기도 하고 영상의 크기에 따라 분석하는 내용이 다를 수 있기 때문이다.  

### 가우시안 피라미드

가우시안 필터를 적용한 후에 이미지 피라미드를 구현하는 것을 가우시안 피라미드라고 하고, opencv는 함수를 제공한다.  

##### dst = cv2.pyrDown(src [, dst, dstsize, borderType] )
##### dst = cv2.pyrUp(src [, dst, dstsize, borderType] )
* src : 입력 영상, numpy 배열
* dst : 결과 영상
* dstsize : 결과영상 크기
* borderType : 외곽 보정 방식


```python
img = cv2.imread('./img/girl.jpg')

# 가우시안 이미지 피라미드 축소
smaller = cv2.pyrDown(img)
# 가우시안 이미지 피라미드 확대
bigger = cv2.pyrUp(img)

cv2.imshow('img', img)
cv2.imshow('pyrDown', smaller)
cv2.imshow('pyrUP', bigger)
cv2.waitKey(0)
cv2.destroyAllWindows()
```

![opencv](/assets/img/opencv/basic/opencvch6_35.png)

### 라플라시안 피라미드

원본과 cv2.pyUp( ) 함수를 적용한 영상의 차이를 단계별로 모아두는 것을 라플라시안 피라미드라고 한다. 


```python
img = cv2.imread('./img/taekwonv1.jpg')

# 원본 영상을 가우시안 피라미드로 푹소
smaller = cv2.pyrDown(img)
# 축소한 영상을 가우시안 피라미드로 확대
bigger = cv2.pyrUp(smaller)
# 원본에서 확대한 영상 빼기
laplacian = cv2.subtract(img, bigger)
# 확대한 영상에 라플라시안 영상을 더해서 복원
restored = bigger + laplacian

merged = np.hstack((img, laplacian, bigger, restored))
cv2.imshow('Laplacian Pytamid', merged)
cv2.waitKey(0)
cv2.destroyAllWindows()
```

![opencv](/assets/img/opencv/basic/opencvch6_36.png)
