class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        n1 = len(nums1)
        n2 = len(nums2)
        medianIdx = (n1 + n2) // 2
        i = 0
        ptr1 = 0
        ptr2 = 0
        prevNum = 0
        num = 0
        while i <= medianIdx:
            prevNum = num
            if ptr2 >= n2:
                print("get num1")
                num = nums1[ptr1]
                ptr1 += 1
            elif ptr1 >= n1:
                print("get num2")
                num = nums2[ptr2]
                ptr2 += 1
            else:
                if nums1[ptr1] <= nums2[ptr2]:
                    num = nums1[ptr1]
                    ptr1 += 1
                else:
                    num = nums2[ptr2]
                    ptr2 += 1
            print("i = {}, num = {}".format(i, num))
            i += 1
                    
        # if odd
        if (n1 + n2) % 2 != 0:
            print("num = {}".format(prevNum, num))
            return num
        # if even
        print("prev = {}, num = {}".format(prevNum, num))

        return (num + prevNum) / 2
                
            