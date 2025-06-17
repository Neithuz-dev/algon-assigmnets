#include<iostream>
    void pattern5(int n)
    {
        for(int i=0;i<n;i++)
        {
            for(int j=n;j>i;j--)
            {
                std::cout<<"* ";
            }
            std::cout<<"\n";
        }
    }
    int main()
    {
        int n;
        std::cout<<"enter the value of n:";
        std::cin>>n;
        pattern5(n);
        return(0);
    }